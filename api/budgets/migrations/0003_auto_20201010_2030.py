# Generated by Django 3.1 on 2020-10-10 20:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('budgets', '0002_budgetitem_budget'),
    ]

    operations = [
        migrations.AlterField(
            model_name='budgetitem',
            name='budget',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='budgets.budget'),
        ),
    ]
