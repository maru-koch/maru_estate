# Generated by Django 4.0.4 on 2022-05-15 01:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useraccount',
            name='email',
            field=models.CharField(max_length=255, unique=True),
        ),
    ]