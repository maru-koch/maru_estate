from rest_framework.response import Response
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .serializers import ListingSerializer, ListingDetailSerializer
from rest_framework import permissions
from rest_framework.views import APIView
from datetime import datetime, timedelta, timezone
from .models import Listing


class ListingView(ListAPIView):
    serializer_class = ListingSerializer
    queryset = Listing.objects.order_by('-list_date').filter(is_published = True)
    permission_classes = (permissions.AllowAny,)
    lookup_field = 'slug'
     
class ListingDetailView(RetrieveAPIView):
    serializer_class = ListingDetailSerializer
    queryset = Listing.objects.all()

class SearchListing(APIView):
    serializer_class = ListingSerializer
    permissions_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        queryset = Listing.objects.order_by('-list_date').filter(is_published = True)
        data = self.request.data
        
        sale_type = data['sale_type']
        queryset = queryset.filter(sale_type=sale_type)

        price = data['price']

        if price == '$0+':
            price = 0
        elif price == '$200,000+':
            price = 200,000
        elif price == '$400,000+':
            price = 400,000
        elif price == '$600,000+':
            price = 600,000
        elif price == '$800,000+':
            price = 800,000
        elif price == '$1,000,000+':
            price = 1,000,000
        elif price == 'any':
            price = -1

        if price != -1:
            queryset = queryset.filter(price__gte = price)

        
        bedroom = data['bedroom']

        if bedroom == '1+':
            bedroom = 1
        elif bedroom == '2+':
            bedroom = 2
        elif bedroom == '3+':
            bedroom = 3
        elif bedroom == '4+':
            bedroom = 4
        elif bedroom == '5+':
            bedroom = 5
        
        queryset = queryset.filter(bedroom__gte = bedroom)
        
        home_type = data['home_type']
        home_type = queryset.filter(home_type__iexact=home_type)

        bathroom = data['bathroom']
        if bathroom == '1+':
            bathroom = 1
        elif bathroom == '2+':
            bathroom = 2
        elif bathroom == '3+':
            bathroom = 3
        elif bathroom == '4+':
            bathroom = 4
        elif bathroom == '5+':
            bathroom = 5

        queryset = queryset.filter(bathroom__gte =bathroom)

        sqft = data['sqft']
        if sqft == '1000+':
            sqft = 1000
        elif sqft == '1200+':
            sqft = 1200
        elif sqft == '1500+':
            sqft = 1500
        elif sqft == '2000+':
            sqft = 2000
        elif sqft == 'any':
            sqft = 0

        if sqft != 0:
            queryset = queryset.filter(sqft__gte =sqft)
        
        # used 'days_listed' as key not list_day
        days_passed = data['list_day']

        if days_passed == "1 or less":
            days_passed = 1
        elif days_passed == "2 or less":
            days_passed = 2
        elif days_passed == "5 or less":
            days_passed = 5
        elif days_passed == "10 or less":
            days_passed = 10
        elif days_passed == "20 or less":
            days_passed = 20
        elif days_passed == "any":
            days_passed = 0
 
        for query in queryset:
            num_days = (datetime.now(timezone.utc) - query.list_date).days
            if days_passed != 0:
                if num_days > days_passed:
                    slug = query.slug
                    queryset = queryset.exclude(slug__iexact=slug)

        has_photos = data['has_photos']

        if has_photos == '1+':
            has_photos = 1
        elif has_photos == '2+':
            has_photos = 2
        elif has_photos == '3+':
            has_photos = 3
        elif has_photos == '5+':
            has_photos = 5
        elif has_photos == '10+':
            has_photos = 10
        elif has_photos == '15+':
            has_photos = 15

        for query in queryset:
            count = 0
            if query.photo_1:
                count += 1
            elif query.photo_2:
                count += 1
            elif query.photo_3:
                count += 1
            elif query.photo_4:
                count += 1
            elif query.photo_5:
                count += 1
            elif query.photo_6:
                count += 1
            elif query.photo_7:
                count += 1
            elif query.photo_8:
                count += 1
            elif query.photo_9:
                count += 1
            elif query.photo_10:
                count += 1
            elif query.photo_11:
                count += 1
            elif query.photo_12:
                count += 1
            elif query.photo_13:
                count += 1
            elif query.photo_14:
                count += 1
            elif query.photo_15:
                count += 1
            elif query.photo_16:
                count += 1
            elif query.photo_17:
                count += 1
            elif query.photo_18:
                count += 1
            elif query.photo_19:
                count += 1
            elif query.photo_20:
                count += 1

            if count < has_photos:
                slug = query.slug
                queryset = queryset.exclude(slug__iexact = slug)
