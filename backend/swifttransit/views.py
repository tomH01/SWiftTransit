from django.shortcuts import render
from rest_framework import viewsets

from swifttransit.models import Occupancy, Box, OnTime, Changeover, BusLine
from swifttransit.serializers import OccupancySerializer, BoxSerializer, OnTimeSerializer, ChangeoverSerializer, \
    BusLineSerializer


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
