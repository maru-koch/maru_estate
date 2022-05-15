from django.urls import path
from .views import TopSellerView, RealtorListView, RealtorRetrieveView

urlpatterns =[
    path('', RealtorListView.as_view()),
    path('topseller', TopSellerView.as_view()),
    path('<pk>', RealtorRetrieveView.as_view()),
]