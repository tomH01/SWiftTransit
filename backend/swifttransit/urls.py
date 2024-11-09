from django.urls import include, path
from rest_framework import routers

from swifttransit import views

router = routers.DefaultRouter()
router.register(r'occupancy', views.OccupancyViewSet)
router.register(r'box', views.BoxViewSet)
router.register(r'changeover', views.ChangeoverViewSet)
router.register(r'on-time', views.OntimeViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]