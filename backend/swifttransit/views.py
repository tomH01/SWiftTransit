from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import APIView

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


class RoutesBoris(APIView):
    def get(self, request):
        routes = [
            [
                {
                    'name': 10,
                    'type': 'bus',
                    'departure': '6:44',
                    'arrival': '6:52',
                    'departure_delay': 1,
                    'arrival_delay': 2,
                    'departure_actual': '6:45',
                    'arrival_actual': '6:53',
                    'bicycle': True,
                    'occupancy': 1,
                    'departure_stop': 'Österbergstraße',
                    'arrival_stop': 'Hauptbahnhof'

                },
                {
                    'name': 8,
                    'type': 'bus',
                    'departure': '7:05',
                    'arrival': '7:22',
                    'departure_delay': 2,
                    'arrival_delay': 1,
                    'departure_actual': '7:07',
                    'arrival_actual': '7:23',
                    'bicycle': False,
                    'occupancy': 2,
                    'departure_stop': 'Hauptbahnhof',
                    'arrival_stop': 'Hagelloch Rathhaus'
                }
            ],
            [
                {
                    'name': 10,
                    'type': 'bus',
                    'departure': '7:21',
                    'arrival': '7:25',
                    'departure_delay': 3,
                    'arrival_delay': 4,
                    'departure_actual': '7:24',
                    'arrival_actual': '7:29',
                    'bicycle': False,
                    'occupancy': 1,
                    'departure_stop': 'Österbergstraße',
                    'arrival_stop': 'Hauptbahnhof'
                },
                {
                    'name': 8,
                    'type': 'bus',
                    'departure': '7:32',
                    'arrival': '7:52',
                    'departure_delay': 2,
                    'arrival_delay': 1,
                    'departure_actual': '7:34',
                    'arrival_actual': '7:53',
                    'bicycle': False,
                    'occupancy': 2,
                    'departure_stop': 'Hauptbahnhof',
                    'arrival_stop': 'Hagelloch Rathhaus'
                }
            ],
            [
                {
                    'name': 10,
                    'type': 'bus',
                    'departure': '7:51',
                    'arrival': '7:55',
                    'departure_delay': 2,
                    'arrival_delay': 2,
                    'departure_actual': '7:52',
                    'arrival_actual': '7:57',
                    'bicycle': True,
                    'occupancy': 1,
                    'departure_stop': 'Österbergstraße',
                    'arrival_stop': 'Hauptbahnhof'
                },
                {
                    'name': 8,
                    'type': 'bus',
                    'departure': '8:02',
                    'arrival': '8:22',
                    'departure_delay': 3,
                    'arrival_delay': 1,
                    'departure_actual': '8:05',
                    'arrival_actual': '8:23',
                    'bicycle': True,
                    'occupancy': 1,
                    'departure_stop': 'Hauptbahnhof',
                    'arrival_stop': 'Hagelloch Rathhaus'
                }
            ],
            [
                {
                    'name': 10,
                    'type': 'bus',
                    'departure': '8:21',
                    'arrival': '8:25',
                    'departure_delay': 5,
                    'arrival_delay': 4,
                    'departure_actual': '8:26',
                    'arrival_actual': '8:29',
                    'bicycle': False,
                    'occupancy': 2,
                    'departure_stop': 'Österbergstraße',
                    'arrival_stop': 'Hauptbahnhof'
                },
                {
                    'name': 8,
                    'type': 'bus',
                    'departure': '8:32',
                    'arrival': '8:52',
                    'departure_delay': 3,
                    'arrival_delay': 3,
                    'departure_actual': '8:35',
                    'arrival_actual': '8:55',
                    'bicycle': True,
                    'occupancy': 1,
                    'departure_stop': 'Hauptbahnhof',
                    'arrival_stop': 'Hagelloch Rathhaus'
                }
            ],
        ]
        return Response(routes)


class RoutesChristiane(APIView):
    def get(self, request):
        routes = [
            [
                {
                    'name': 8,
                    'type': 'bus',
                    'departure': '7:13',
                    'arrival': '7:22',
                    'departure_delay': 2,
                    'arrival_delay': 1,
                    'departure_actual': '7:15',
                    'arrival_actual': '7:23',
                    'bicycle': False,
                    'occupancy': 2,
                    'departure_stop': 'Gösstraße',
                    'arrival_stop': 'Hagelloch Rathhaus'
                }
            ],
            [
                {
                    'name': 8,
                    'type': 'bus',
                    'departure': '7:40',
                    'arrival': '7:52',
                    'departure_delay': 2,
                    'arrival_delay': 1,
                    'departure_actual': '7:42',
                    'arrival_actual': '7:53',
                    'bicycle': False,
                    'occupancy': 2,
                    'departure_stop': 'Gösstraße',
                    'arrival_stop': 'Hagelloch Rathhaus'
                }
            ],
            [
                {
                    'name': 8,
                    'type': 'bus',
                    'departure': '8:10',
                    'arrival': '2:52',
                    'departure_delay': 3,
                    'arrival_delay': 1,
                    'departure_actual': '8:13',
                    'arrival_actual': '8:23',
                    'bicycle': True,
                    'occupancy': 1,
                    'departure_stop': 'Gösstraße',
                    'arrival_stop': 'Hagelloch Rathhaus'
                }
            ],
            [
                {
                    'name': 8,
                    'type': 'bus',
                    'departure': '8:40',
                    'arrival': '8:52',
                    'departure_delay': 3,
                    'arrival_delay': 3,
                    'departure_actual': '8:43',
                    'arrival_actual': '8:55',
                    'bicycle': True,
                    'occupancy': 1,
                    'departure_stop': 'Gösstraße',
                    'arrival_stop': 'Hagelloch Rathhaus'
                }
            ],
        ]
        return Response(routes)
