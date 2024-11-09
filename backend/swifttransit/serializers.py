from django.core.exceptions import ValidationError
from rest_framework import serializers

from swifttransit.models import Occupancy, Box, Changeover, OnTime, BusLine


class BusLineSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = BusLine
        fields = '__all__'

    def validate(self, data):
        instance = BusLine(**data)
        try:
            instance.full_clean()
        except ValidationError as e:
            raise serializers.ValidationError(e)
        return data

class OccupancySerializer(serializers.HyperlinkedModelSerializer):
    bus_line = serializers.HyperlinkedRelatedField(
        queryset=BusLine.objects.all(),
        view_name='busline-detail',
        many=False,
    )
    class Meta:
        model = Occupancy
        fields = '__all__'

    def validate(self, data):
        instance = Occupancy(**data)
        try:
            instance.full_clean()
        except ValidationError as e:
            raise serializers.ValidationError(e.message_dict)
        return data


class BoxSerializer(serializers.HyperlinkedModelSerializer):
    bus_line = serializers.HyperlinkedRelatedField(
        queryset=BusLine.objects.all(),
        view_name='busline-detail',
        many=False,
    )

    class Meta:
        model = Box
        fields = '__all__'

    def validate(self, data):
        instance = Box(**data)
        try:
            instance.full_clean()
        except ValidationError as e:
            raise serializers.ValidationError(e.message_dict)
        return data


class ChangeoverSerializer(serializers.HyperlinkedModelSerializer):
    bus_line = serializers.HyperlinkedRelatedField(
        queryset=BusLine.objects.all(),
        view_name='busline-detail',
        many=False,
    )

    class Meta:
        model = Changeover
        fields = '__all__'

    def validate(self, data):
        instance = Changeover(**data)
        try:
            instance.full_clean()
        except ValidationError as e:
            raise serializers.ValidationError(e.message_dict)
        return data


class OnTimeSerializer(serializers.HyperlinkedModelSerializer):
    bus_line = serializers.HyperlinkedRelatedField(
        queryset=BusLine.objects.all(),
        view_name='busline-detail',
        many=True,
    )

    class Meta:
        model = OnTime
        fields = '__all__'

    def validate(self, data):
        instance = OnTime(**data)
        try:
            instance.full_clean()
        except ValidationError as e:
            raise serializers.ValidationError(e.message_dict)
        return data
