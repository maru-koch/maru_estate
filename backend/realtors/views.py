from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .serializers import RealtorSerializer
from .models import Realtor


class RealtorListView(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Realtor.objects.all()
    serializer_class = RealtorSerializer
    pagination_class = None


class RealtorRetrieveView(RetrieveAPIView):
    queryset = Realtor.objects.all()
    serializer_class = RealtorSerializer


class TopSellerView(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = RealtorSerializer
    queryset = Realtor.objects.filter(is_top_seller=True)
    pagination_class = None



    
