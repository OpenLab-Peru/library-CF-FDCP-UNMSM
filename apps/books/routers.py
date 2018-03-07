# Python imports


# Django imports


# Third party apps imports


# Local imports
from .viewsets import BookModelViewSet, TagModelViewSet


# Create your routers here.
books = (
    (r"book", BookModelViewSet),
    (r"tag", TagModelViewSet),
)
