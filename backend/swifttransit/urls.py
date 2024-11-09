from django.urls import include, path
from rest_framework import routers

from swifttransit import views
from swifttransit.views import Routes

router = routers.DefaultRouter()
router.register(r'busline', views.BusLineViewSet)
router.register(r'station', views.StationViewSet)
router.register(r'occupancy', views.OccupancyViewSet)
router.register(r'box', views.BoxViewSet)
router.register(r'changeover', views.ChangeoverViewSet)
router.register(r'on-time', views.OntimeViewSet)
router.register(r'user-credits', views.UserCreditsViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/routes/', Routes.as_view()),
]