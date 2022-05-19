
from django.urls import path
from .views import ListingView, ListingDetailView, SearchListingView

urlpatterns = [
    path('', ListingView.as_view()),
    path('search', SearchListingView.as_view()),
    path('<pk>', ListingDetailView.as_view(), name ="listing_detail")
    ]