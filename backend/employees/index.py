import json
import os
import psycopg2
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Get employees list with optional search
    Args: event with httpMethod, queryStringParameters; context with request_id
    Returns: HTTP response with employees data
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'GET':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    params = event.get('queryStringParameters') or {}
    search_query = params.get('search', '').lower()
    
    database_url = os.environ.get('DATABASE_URL')
    
    conn = psycopg2.connect(database_url)
    cursor = conn.cursor()
    
    query = '''
        SELECT e.id, e.phone, e.last_name, e.first_name, e.middle_name, 
               e.department_id, d.name as department_name, e.position, e.office_number
        FROM employees e
        LEFT JOIN departments d ON e.department_id = d.id
        ORDER BY e.last_name, e.first_name
    '''
    
    cursor.execute(query)
    rows = cursor.fetchall()
    
    employees = []
    for row in rows:
        emp = {
            'id': row[0],
            'phone': row[1],
            'last_name': row[2],
            'first_name': row[3],
            'middle_name': row[4],
            'department_id': row[5],
            'department_name': row[6],
            'position': row[7],
            'office_number': row[8]
        }
        
        if search_query:
            searchable = f"{row[2]} {row[3]} {row[4]} {row[1]} {row[7]} {row[6]} {row[8]}".lower()
            if search_query in searchable:
                employees.append(emp)
        else:
            employees.append(emp)
    
    cursor.close()
    conn.close()
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'employees': employees}),
        'isBase64Encoded': False
    }
