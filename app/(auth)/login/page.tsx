"use client";

import {
  useEffect,
  useState,
} from 'react';
import { useRouter } from 'next/navigation';
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";

import { Button } from "../../components/Button/Button";

const LOGIN_MUTATION = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
    }
  }
`;

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginResponse {
  loginUser: {
    token: string;
  };
}

export default function Login() {
  const router = useRouter();
  const [
    formData,
    setFormData,
  ] = useState<LoginFormData>({
    email: '',
    password: '',
  });
  const [
    errors,
    setErrors,
  ] = useState<Array<string>>([]);

  useEffect(() => {
    const token = localStorage?.getItem('token');
    
    if (token) {
      router.push('/');
    }
  }, [router]);

  const [
    loginUser,
    { loading },
  ] = useMutation<LoginResponse>(LOGIN_MUTATION, {
    onCompleted: data => {
      localStorage.setItem('token', data.loginUser.token);

      router.push('/');
    },
    onError: apolloError => {
      const errorMessages: Array<string> = [];
      
      if ('graphQLErrors' in apolloError && Array.isArray(apolloError.graphQLErrors)) {
        apolloError.graphQLErrors.forEach((err: { message: string }) => {
          errorMessages.push(err.message);
        });
      } else if (apolloError.message) {
        errorMessages.push(apolloError.message);
      }
      
      setErrors(errorMessages.length > 0 ? errorMessages : ['Wystąpił nieoczekiwany błąd']);
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value,
    } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Array<string> = [];
    
    if (!formData.email) {
      newErrors.push('Email jest wymagany');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.push('Email ma nieprawidłowy format');
    }
    
    if (!formData.password) {
      newErrors.push('Hasło jest wymagane');
    } else if (formData.password.length < 6) {
      newErrors.push('Hasło musi mieć co najmniej 6 znaków');
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      
      return;
    }

    try {
      await loginUser({
        variables: {
          email: formData.email,
          password: formData.password,
        },
      });
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  return (
    <div className="flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-sm w-full space-y-6">
        <div>
          <h2 className="text-center text-2xl font-bold text-gray-900">
            Zaloguj się do swojego konta
          </h2>
        </div>
        
        <form
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          <div className="space-y-3">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Wprowadź swój email"
                disabled={loading}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Hasło
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Wprowadź swoje hasło"
                disabled={loading}
              />
            </div>
          </div>

          {errors.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-md p-3">
              <div className="flex">
                <div className="ml-2">
                  <h3 className="text-sm font-medium text-red-800">
                    Wystąpiły następujące błędy:
                  </h3>
                  <ul className="mt-1 text-sm text-red-700 list-disc list-inside">
                    {errors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          <div>
            <Button
              active={true}
              name={loading ? "Logowanie..." : "Zaloguj się"}
              onClick={() => {}}
              fullWidth={true}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
