from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from swifttransit.models import Occupancy, Box, OnTime, Changeover, UserCredits, Station, BusLine
from swifttransit.serializers import OccupancySerializer, BoxSerializer, OnTimeSerializer, ChangeoverSerializer, \
    UserCreditsSerializer, BusLineSerializer, StationSerializer


class BusLineViewSet(viewsets.ModelViewSet):
    queryset = BusLine.objects.all()
    serializer_class = BusLineSerializer


class OccupancyViewSet(viewsets.ModelViewSet):
    queryset = Occupancy.objects.all()
    serializer_class = OccupancySerializer


class BoxViewSet(viewsets.ModelViewSet):
    queryset = Box.objects.all()
    serializer_class = BoxSerializer


class ChangeoverViewSet(viewsets.ModelViewSet):
    queryset = Changeover.objects.all()
    serializer_class = ChangeoverSerializer


class OntimeViewSet(viewsets.ModelViewSet):
    queryset = OnTime.objects.all()
    serializer_class = OnTimeSerializer


class UserCreditsViewSet(viewsets.ModelViewSet):
    queryset = UserCredits.objects.all()
    serializer_class = UserCreditsSerializer


class StationViewSet(viewsets.ModelViewSet):
    queryset = Station.objects.all()
    serializer_class = StationSerializer

    @action(detail=False, methods=['get'])
    def prefix_search(self, request):
        prefix = request.query_params.get('prefix', '')
        if prefix:
            limit = 10
            matches = Station.objects.filter(name__startswith=prefix)[:limit]
            serializer = StationSerializer(matches, many=True)
            return Response(serializer.data)
        return Response({"error": "Prefix parameter is required."}, status=400)
