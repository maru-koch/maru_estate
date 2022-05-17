from django.core.mail import send_mail
from .serializers import ContactSerializer
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Contact

class ContactCreateView(APIView):
    serializer_class = ContactSerializer
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format = None):
        
        try:
            data = self.request.data
            subject = data['subject']
            message = 'dear ' + data['name'] +'\n' + data['message']
            email = data['email']
            send_mail(subject, message, 'marukoch.ng', [email], fail_silently=  False)
            contact = Contact(name = data['name'], subject = subject, email = email, message = data['message'])
            contact.save()
            return Response({'success':'message sent successfully'})
        except:
            return Response({'error': 'message not sent'})

