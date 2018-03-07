# Python imports


# Django imports


# Third party apps imports
from rest_framework.serializers import ModelSerializer


# Local imports
from .models import Book, Tag


# Create your serializers here.
class BookModelSerializer(ModelSerializer):
    class Meta:
        model = Book
        fields = "__all__"


class TagModelSerializer(ModelSerializer):
    class Meta:
        model = Tag
        fields = "__all__"
