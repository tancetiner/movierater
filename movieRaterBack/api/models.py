from django.db import models


class User(models.Model):
    username = models.CharField(max_length=40)
    password = models.CharField(max_length=20)


class Save(models.Model):
    username = models.CharField(max_length=40)
    movieId = models.IntegerField()


class Movie(models.Model):
    name = models.CharField(max_length=40)
    year = models.IntegerField()
    director = models.CharField(max_length=40)
    rating = models.FloatField()
    metaScore = models.IntegerField()
    overview = models.TextField()
    runtime = models.IntegerField()
    genre = models.CharField(max_length=40)


class Rate(models.Model):
    username = models.CharField(max_length=40)
    movieId = models.IntegerField()
    rating = models.IntegerField()
