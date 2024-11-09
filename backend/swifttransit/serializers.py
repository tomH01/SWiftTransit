from django.core.exceptions import ValidationError
from rest_framework import serializers

from swifttransit.models import Occupancy, Box, Changeover, OnTime

class OccupancySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Occupancy
        fields = '__all__'

    def validate(self, data):
        instance = Occupancy(**data)
        try:
            instance.full_clean()
        except ValidationError as e:
            raise serializers.ValidationError(e.message_dict)


class BoxSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Box
        fields = '__all__'

    def validate(self, data):
        instance = Box(**data)
        try:
            instance.full_clean()
        except ValidationError as e:
            raise serializers.ValidationError(e.message_dict)


class ChangeoverSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Changeover
        fields = '__all__'

    def validate(self, data):
        instance = Changeover(**data)
        try:
            instance.full_clean()
        except ValidationError as e:
            raise serializers.ValidationError(e.message_dict)


class OnTimeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = OnTime
        fields = '__all__'

    def validate(self, data):
        instance = OnTime(**data)
        try:
            instance.full_clean()
        except ValidationError as e:
            raise serializers.ValidationError(e.message_dict)
