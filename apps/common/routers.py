# Python imports


# Django imports


# Third party apps imports
from rest_framework.routers import DefaultRouter

# Local imports
from ..books.routers import books


# Create your routers here.
routers_tuples = (books,)
routers_lists = sum(
    [list(router_tuple) for router_tuple in routers_tuples], [])

router = DefaultRouter()

for router_list in sorted(routers_lists):
    router.register(router_list[0], router_list[1])
