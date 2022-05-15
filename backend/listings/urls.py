
from django.urls import path
from .views import ListingView, ListingDetailView, SearchListingView

urlpatterns = [
    path('', ListingView.as_view()),
    path('search', SearchListingView.as_view()),
    path('<slug>', ListingDetailView.as_view() )
    ]