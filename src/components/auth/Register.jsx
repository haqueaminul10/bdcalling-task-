import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import FacebookIcon from '@/icon/facebook';
import GoogleIcon from '@/icon/google';
import OpenEyeIcon from '@/icon/openeye';
import CloseEyeIcon from '@/icon/closeEye';

const Register = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        'https://api-fresh-harvest.code-commando.com/api/v1/users/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      }

      setIsDialogOpen(false);
      router.push('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <p>Register</p>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[400px] p-6 rounded-lg shadow-md'>
        <DialogHeader>
          <DialogTitle className='text-center text-2xl font-semibold'>
            Register
          </DialogTitle>
        </DialogHeader>
        <form className='space-y-6' onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor='fullName'
              className='block text-sm font-medium text-gray-700'
            >
              Full Name
            </label>
            <Input
              id='fullName'
              type='text'
              value={formData.fullName}
              onChange={handleChange}
              placeholder='Enter your Name'
              required
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500'
            />
          </div>

          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'
            >
              Email
            </label>
            <Input
              id='email'
              type='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter your email'
              required
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500'
            />
          </div>

          <div>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700'
            >
              Password
            </label>
            <div className='relative mt-1'>
              <Input
                id='password'
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleChange}
                placeholder='Enter your password'
                required
                className='block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500'
              />
              <div
                onClick={togglePasswordVisibility}
                className='absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer'
              >
                {!showPassword ? (
                  <CloseEyeIcon color='black' size={20} />
                ) : (
                  <OpenEyeIcon color='black' size={20} />
                )}
              </div>
            </div>
          </div>

          {error && <p className='text-red-500 text-sm'>{error}</p>}

          <DialogFooter>
            <Button
              type='submit'
              disabled={loading}
              className='w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600'
            >
              {loading ? 'Registering...' : 'Register'}
            </Button>
          </DialogFooter>
        </form>

        <div className='mt-6 text-center'>
          <p className='text-sm text-gray-600'>Or Sign in with</p>
          <div className='flex justify-center mt-3 space-x-12'>
            <Button
              className='flex items-center justify-center w-36 h-10 border'
              variant='outline'
            >
              <GoogleIcon /> <span>Google</span>
            </Button>
            <Button
              variant='outline'
              className='flex items-center justify-center w-36 h-10 border'
            >
              <FacebookIcon /> <span>Facebook</span>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Register;
