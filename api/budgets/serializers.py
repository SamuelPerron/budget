from rest_framework import serializers

from .models import Budget, BudgetItem


class BudgetItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = BudgetItem
        fields = ('name', 'type', 'value')


class BudgetSerializer(serializers.ModelSerializer):
    budget_items_set = BudgetItemSerializer(many=True)

    class Meta:
        model = Budget
        fields = '__all__'
