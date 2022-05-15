from django.contrib.auth import get_user_model
from rest_framework.response import Response 
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework import status
from rest_framework.parsers import JSONParser

User = get_user_model()

class SignUpView(APIView):

    """ users can sign up with valid credentials """
    
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format = None):
        data = self.request.data
        name = data['name']
        email = data['email']
        password1 = data['password1']
        password2 = data['password2']

        if password1 == password2:
            if User.objects.filter(email=email).exists():
                return Response({'error': 'Email already exists'})
            else:
                if len(password1) < 6:
                    return Response({'error': 'Password must be at least 6 characters'})
                else:
                    user = User.objects.create_user(email = email, name = name, password = password1)
                    user.save()
                    return Response({'success':'Account successfully created'})
        else:
            return Response({'error':'password does not match'})