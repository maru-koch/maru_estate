from django.core.mail import send_mail, BadHeaderError
from .serializers import ContactSerializer
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Contact


class ContactCreateView(APIView):
    serializer_class = ContactSerializer
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format = None):
        
        data = self.request.data
        subject = data['subject']
        message = '\ndear ' + data['name'] +'\n\n' + data['message']
        email = data['email']
        name = data['name']

        if subject and message and email and name:
            try:
                send_mail(subject, message, 'marukoch.ng', ['marukoch.ng@gmail.com'], fail_silently=  False)
                contact = Contact(name = name, subject = subject, email = email, message = message)
                contact.save()
                return Response({'success':'message sent successfully'})
            except BadHeaderError:
                return Response({'error': 'Your email is compromised!'})
        else:
            return Response({'error': 'Invalid email credentials'})
