# Python imports


# Django imports


# Third party apps imports
from rest_framework.viewsets import ModelViewSet


# Local imports
from .models import Book, Tag
from .serializers import BookModelSerializer, TagModelSerializer


# Create your viewsets here.
class BookModelViewSet(ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookModelSerializer
    filter_fields = ("tag",)


class TagModelViewSet(ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagModelSerializer
