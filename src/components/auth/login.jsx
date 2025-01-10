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
import Register from './Register';

const Login = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p>Log In</p>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[400px] p-6 rounded-lg shadow-md'>
        <DialogHeader>
          <DialogTitle className='text-center text-2xl font-semibold'>
            Login
          </DialogTitle>
        </DialogHeader>
        <form className='space-y-6'>
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
              placeholder='Enter your email'
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
            <Input
              id='password'
              type='password'
              placeholder='Enter your password'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500'
            />
          </div>
          <div className='flex items-center justify-between'>
            <label className='flex items-center text-sm text-gray-600'>
              <input
                type='checkbox'
                className='form-checkbox h-4 w-4 text-orange-500'
              />
              <span className='ml-2'>Remember me</span>
            </label>
            <a href='#' className='text-sm text-orange-500 hover:underline'>
              Forgot Password?
            </a>
          </div>
          <DialogFooter>
            <Button
              type='submit'
              className='w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600'
            >
              Login
            </Button>
          </DialogFooter>
        </form>
        <div className='mt-6 text-center'>
          <p className='text-sm text-gray-600'>Or Sign in with</p>
          <div className='flex justify-center mt-3 space-x-12 '>
            <Button
              className='flex items-center justify-center w-36  h-10 border '
              variant='outline'
            >
              <GoogleIcon /> <span>Google</span>
            </Button>
            <Button
              variant='outline'
              className='flex items-center justify-center w-36  h-10 border'
            >
              <FacebookIcon /> <span>Facebook</span>
            </Button>
          </div>
          <p className='mt-4 text-sm text-gray-600'>
            Don’t have an account?{' '}
            <a href='#' className='text-orange-500 hover:underline'>
              <Register />
            </a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
