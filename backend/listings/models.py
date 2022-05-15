from django.db import models
from django.utils.timezone import now
from realtors.models import Realtor
from django.urls import reverse

class Listing(models.Model):

    class SaleType(models.TextChoices):
        FOR_SALE = 'For Sale'
        FOR_RENT = "For Rent"
    
    class HomeType(models.TextChoices):
        House = "House"
        Condo = "Condo"
        TownHouse = "Town House"


    realtors = models.ForeignKey(Realtor, on_delete=models.DO_NOTHING)
    title = models.CharField(max_length=200)
    slug = models.SlugField()
    address = models.CharField(max_length=200)
    city = models.CharField(max_length=200)
    state = models.CharField(max_length=200)
    zipcode = models.CharField(max_length=20)
    description = models.TextField(blank=True)
    sale_type = models.CharField(max_length=50, choices = SaleType.choices, default = SaleType.FOR_SALE)
    home_type = models.CharField(max_length=50, choices = HomeType.choices, default = HomeType.House)
    sqft = models.IntegerField()
    bedroom = models.IntegerField()
    bathroom = models.IntegerField()
    price = models.IntegerField()
    open_house = models.BooleanField(default=False)
    photo_main = models.ImageField(upload_to = "photos/%y/%m/%d/")
    photo_1 = models.ImageField(upload_to = "photos/%y/%m/%d/", blank=True)
    photo_2 = models.ImageField(upload_to = "photos/%y/%m/%d/", blank=True)
    photo_3 = models.ImageField(upload_to = "photos/%y/%m/%d/", blank=True)
    photo_4 = models.ImageField(upload_to = "photos/%y/%m/%d/", blank=True)
    photo_5 = models.ImageField(upload_to = "photos/%y/%m/%d/", blank=True)
    photo_6 = models.ImageField(upload_to = "photos/%y/%m/%d/", blank=True)
    photo_7 = models.ImageField(upload_to = "photos/%y/%m/%d/", blank=True)
    photo_8 = models.ImageField(upload_to = "photos/%y/%m/%d/", blank=True)
    photo_9 = models.ImageField(upload_to = "photos/%y/%m/%d/", blank=True)
    photo_10 = models.ImageField(upload_to = "photos/%y/%m/%d/", blank=True)
    photo_11 = models.ImageField(upload_to = "photos/%y/%m/%d/", blank=True)
    photo_12 = models.ImageField(upload_to = "photos/%y/%m/%d/", blank=True)
    photo_13 = models.ImageField(upload_to = "photos/%y/%m/%d/", blank=True)
    photo_14 = models.ImageField(upload_to = "photos/%y/%m/%d/", blank=True)
    photo_15 = models.ImageField(upload_to = "photos/%y/%m/%d/", blank=True)
    photo_16 = models.ImageField(upload_to = "photos/%y/%m/%d/", blank=True)
    photo_17 = models.ImageField(upload_to = "photos/%y/%m/%d/", blank=True)
    photo_18 = models.ImageField(upload_to = "photos/%y/%m/%d/", blank=True)
    photo_19 = models.ImageField(upload_to = "photos/%y/%m/%d/", blank=True)
    photo_20 = models.ImageField(upload_to = "photos/%y/%m/%d/", blank=True)
    is_published = models.BooleanField(default=True)
    list_date = models.DateTimeField(default = now, blank=True)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('listing_detail', kwargs ={'slug': self.slug})

    
