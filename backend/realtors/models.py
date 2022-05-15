from django.db import models
from datetime import datetime

# Create your models here.

class Realtor(models.Model):
    name = models.CharField(max_length=255)
    photo = models.ImageField(upload_to="photo/%y/%m/%d")
    phone = models.CharField(max_length=20)
    description = models.TextField(blank=True)
    email = models.EmailField(max_length=200)
    is_top_seller = models.BooleanField(default=False)
    date_hired = models.DateTimeField(default= datetime.now, blank=True)

    def __str__(self):
        return self.name
