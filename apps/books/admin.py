# Python imports


# Django imports
from django.contrib import admin


# Third party apps imports


# Local imports
from .models import Book, Tag


# Register your models here.
admin.site.register(Book)
admin.site.register(Tag)
