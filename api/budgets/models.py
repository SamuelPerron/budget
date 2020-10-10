from django.db import models

class Budget(models.Model):
    PERIODIC = 'periodic'
    ONE_TIME = 'one_time'
    TEMPORARY = 'temporary'
    TYPES = (
        (PERIODIC, 'Periodic'),
        (ONE_TIME, 'One time'),
        (TEMPORARY, 'Temporary'),
    )

    TWO_WEEKS = 'two_weeks'
    MONTH = 'month'
    PERIODS = (
        (TWO_WEEKS, '2 weeks'),
        (MONTH, 'A month'),
    )

    name = models.CharField(max_length=255, blank=False, null=False)
    type = models.CharField(max_length=9, blank=False, null=False, default=PERIODIC, choices=TYPES)
    period = models.CharField(max_length=9, blank=False, null=False, default=TWO_WEEKS, choices=PERIODS)


class BudgetItem(models.Model):
    INCOME = 'income'
    NEED = 'need'
    WANT = 'want'
    SAVING = 'saving'
    TYPES = (
        (INCOME, 'Income'),
        (NEED, 'Need'),
        (WANT, 'Want'),
        (SAVING, 'Saving'),
    )

    budget = models.ForeignKey('budgets.Budget', on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=255, blank=False, null=False)
    type = models.CharField(max_length=6, blank=False, null=False, choices=TYPES)
    value = models.FloatField(blank=False, null=False, default=0)
