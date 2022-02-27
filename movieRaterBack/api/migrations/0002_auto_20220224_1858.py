# Generated by Django 3.2.8 on 2022-02-24 18:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=40)),
                ('year', models.IntegerField()),
                ('director', models.CharField(max_length=40)),
                ('rating', models.FloatField()),
                ('metaScore', models.IntegerField()),
                ('overview', models.TextField()),
                ('runtime', models.IntegerField()),
                ('genre', models.CharField(max_length=40)),
            ],
        ),
        migrations.CreateModel(
            name='Save',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=40)),
                ('movieId', models.JSONField()),
            ],
        ),
        migrations.AlterField(
            model_name='user',
            name='username',
            field=models.CharField(max_length=40),
        ),
    ]
