from rest_framework import serializers
from .models import Listing

class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = ['id', 'title', 'address', 'city', 'state', 'price', 'sale_type', 'home_type','bedroom', 'bathroom','sqft', 'photo_main','slug ']


class ListingDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        field = "__all__"
        lookup_field = 'slug'