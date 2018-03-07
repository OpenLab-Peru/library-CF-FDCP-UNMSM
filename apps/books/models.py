# Python imports


# Django imports
from django.db import models


# Third party apps imports
from model_utils.models import TimeStampedModel


# Local imports


# Create your models here.
class Book(TimeStampedModel):
    name = models.CharField(max_length=50, verbose_name="Nombre")
    code = models.CharField(max_length=50, unique=True, verbose_name="Código")

    class Meta:
        verbose_name = "Libro"

    def __str__(self):
        return self.name

    @property
    def tags(self):
        return self.tag_set.all().values_list("name", flat=True)


class Tag(TimeStampedModel):
    name = models.CharField(max_length=50, verbose_name="Nombre")
    books = models.ManyToManyField("Book")

    class Meta:
        verbose_name = "Tag"

    def __str__(self):
        return self.name
