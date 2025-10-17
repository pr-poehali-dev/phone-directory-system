import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const Checkout = () => {
  const navigate = useNavigate();
  const [cartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Chocolate Delight',
      price: 2500,
      image: 'https://cdn.poehali.dev/projects/fe67fa94-9243-43b6-9b0e-7640dbe53783/files/2ad5badd-6757-43b5-8d8a-732026f6581b.jpg',
      quantity: 1
    },
    {
      id: 2,
      name: 'Fruit Paradise',
      price: 3200,
      image: 'https://cdn.poehali.dev/projects/fe67fa94-9243-43b6-9b0e-7640dbe53783/files/7fac26b6-0942-4886-bdc9-f1faa319793d.jpg',
      quantity: 2
    }
  ]);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    deliveryDate: '',
    deliveryTime: '',
    comment: ''
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 500;
  const finalTotal = totalAmount + deliveryFee;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-[#F5E6D3] flex items-center justify-center">
        <div className="bg-white rounded-3xl p-12 text-center max-w-md shadow-2xl">
          <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="Check" size={48} className="text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Order Confirmed!</h2>
          <p className="text-gray-600 mb-2">Thank you for your order!</p>
          <p className="text-gray-600 mb-6">We'll contact you shortly to confirm delivery details.</p>
          <div className="text-4xl mb-4">🎉</div>
          <p className="text-sm text-gray-500">Redirecting to homepage...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5E6D3]">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-[#B76E79] transition-colors">Home</Link>
              <Link to="/catalog" className="text-gray-700 hover:text-[#B76E79] transition-colors">Catalog</Link>
              <Link to="/checkout" className="text-[#B76E79] font-semibold">Checkout</Link>
            </div>
          </div>
        </nav>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-[#B76E79]">Checkout</span>
          </h1>
          <p className="text-gray-600 text-xl italic">Complete your order</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Icon name="User" size={28} className="text-[#B76E79] mr-3" />
                Personal Information
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2 font-semibold">Full Name *</label>
                    <Input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 font-semibold">Phone *</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+7 (999) 123-45-67"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-semibold">Email *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="w-full"
                  />
                </div>

                <div className="pt-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <Icon name="MapPin" size={24} className="text-[#B76E79] mr-3" />
                    Delivery Address
                  </h3>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-semibold">Street Address *</label>
                  <Input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="123 Main Street, Apt 4B"
                    required
                    className="w-full"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2 font-semibold">City *</label>
                    <Input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Chicago"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 font-semibold">ZIP Code *</label>
                    <Input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      placeholder="60604"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <Icon name="Calendar" size={24} className="text-[#B76E79] mr-3" />
                    Delivery Schedule
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2 font-semibold">Delivery Date *</label>
                    <Input
                      type="date"
                      name="deliveryDate"
                      value={formData.deliveryDate}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 font-semibold">Preferred Time *</label>
                    <Input
                      type="time"
                      name="deliveryTime"
                      value={formData.deliveryTime}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-semibold">Additional Comments</label>
                  <textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleInputChange}
                    placeholder="Special instructions, allergies, etc..."
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#B76E79]"
                  ></textarea>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-[#B76E79] hover:bg-[#A05F6A] text-white py-6 text-lg font-semibold"
                >
                  <Icon name="CheckCircle" size={24} className="mr-2" />
                  Place Order - {finalTotal} ₽
                </Button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 shadow-lg sticky top-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Icon name="ShoppingCart" size={28} className="text-[#B76E79] mr-3" />
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                {cartItems.map(item => (
                  <div key={item.id} className="flex items-center gap-4 pb-4 border-b border-gray-200">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-[#B76E79]">{item.price * item.quantity} ₽</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 border-t border-gray-200 pt-4">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal:</span>
                  <span className="font-semibold">{totalAmount} ₽</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Delivery Fee:</span>
                  <span className="font-semibold">{deliveryFee} ₽</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-gray-800 pt-3 border-t border-gray-300">
                  <span>Total:</span>
                  <span className="text-[#B76E79]">{finalTotal} ₽</span>
                </div>
              </div>

              <div className="mt-6 bg-[#F5E6D3] rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <Icon name="Info" size={20} className="text-[#B76E79] mt-1" />
                  <div className="text-sm text-gray-700">
                    <p className="font-semibold mb-1">Free delivery on orders over 5000 ₽</p>
                    <p className="text-xs">Your order will be prepared fresh on the delivery day</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="text-center py-8 mt-16 border-t border-gray-300">
          <div className="flex items-center justify-center mb-4">
            <Icon name="Home" size={16} className="text-[#B76E79] mr-2" />
            <p className="text-gray-600 text-sm">
              28 Jackson Blvd Ste 1020 Chicago IL 60604-2340
            </p>
          </div>
          <p className="text-gray-600 text-sm">
            Best Cakes © 2013 • <a href="#" className="text-[#B76E79] hover:underline">Privacy policy</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Checkout;
