# Generated by Django 3.2.8 on 2022-02-27 19:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20220227_1421'),
    ]

    operations = [
        migrations.RenameField(
            model_name='movie',
            old_name='rating',
            new_name='imdbRating',
        ),
        migrations.RenameField(
            model_name='movie',
            old_name='year',
            new_name='releaseYear',
        ),
    ]
