# Requirements
```django``` <br>
```djangorestframework```

# Installation
```python manage.py migrate```
Always rerun this after incoming changes.

# Run Server
```python manage.py runserver```

# Load Data
```python manage.py loaddata bus_stations_tuebingen.json```

# Access API
[occupancy](http://localhost:8000/api/occupancy) <br>
[box](http://localhost:8000/api/box) <br>
[changeover](http://localhost:8000/api/changeover) <br>
[on-time](http://localhost:8000/api/on-time) <br>
[user-credits](http://localhost:8000/api/user-credits) <br>
[routes](http://localhost:8000/api/routes) <br>
[station/prefix_search](http://localhost:8000/api/station/prefix_search?prefix=am) <br>
