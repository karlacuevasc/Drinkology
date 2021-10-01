from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(300), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    first_name = db.Column(db.String(300), unique=False, nullable=False)
    last_name = db.Column(db.String(300), unique=False, nullable=False)
    date = db.Column(db.String(300), unique=False, nullable=False)
    favorite_cocktails = db.relationship('FavoriteCocktail', backref='user', lazy=True)
    

    def __repr__(self):
        return self.first_name

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "first_name": self.first_name,
            "last_name": self.last_name, 
            "date": self.date, 
            "favorite_cocktails": list(map(lambda favorite: favorite.serialize(), self.favorite_cocktails))
            # do not serialize the password, its a security breach
        }

class Cocktail(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(300), unique=False, nullable=True)
    image = db.Column(db.String(400), unique=False, nullable=True)
    alcohol_content = db.Column(db.String(300), unique=False, nullable=True)
    first_step = db.Column(db.String(300), unique=False, nullable=True)
    second_step = db.Column(db.String(300), unique=False, nullable=True)
    third_step = db.Column(db.String(300), unique=False, nullable=True)
    fourth_step = db.Column(db.String(300), unique=False, nullable=True)
    fifth_step = db.Column(db.String(300), unique=False, nullable=True)
    first_ingredient = db.Column(db.String(300), unique=False, nullable=True)
    second_ingredient = db.Column(db.String(300), unique=False, nullable=True)
    third_ingredient = db.Column(db.String(300), unique=False, nullable=True)
    fourth_ingredient = db.Column(db.String(300), unique=False, nullable=True)
    fifth_ingredient = db.Column(db.String(300), unique=False, nullable=True)
    first_measurement = db.Column(db.String(300), unique=False, nullable=True)
    second_measurement = db.Column(db.String(300), unique=False, nullable=True)
    third_measurement = db.Column(db.String(300), unique=False, nullable=True)
    fourth_measurement = db.Column(db.String(300), unique=False, nullable=True)
    fifth_measurement = db.Column(db.String(300), unique=False, nullable=True)
    garnish = db.Column(db.String(300), unique=False, nullable=True)
    glassware = db.Column(db.String(300), unique=False, nullable=True)
    favorite_cocktails = db.relationship('FavoriteCocktail', backref='cocktail', lazy=True)
   
    def __repr__(self):
        return self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "image": self.image,
            "alcohol_content": self.alcohol_content,
            "first_step": self.first_step,
            "second_step": self.second_step,
            "third_step": self.third_step,
            "fourth_step": self.fourth_step,
            "fifth_step": self.fifth_step,
            "first_ingredient": self.first_ingredient,
            "second_ingredient": self.second_ingredient,
            "third_ingredient": self.third_ingredient,
            "fourth_ingredient": self.fourth_ingredient,
            "fifth_ingredient": self.fifth_ingredient,
            "first_measurement": self.first_measurement,
            "second_measurement": self.second_measurement,
            "third_measurement": self.third_measurement,
            "fourth_measurement": self.fourth_measurement,
            "fifth_measurement": self.fifth_measurement,
            "garnish": self.garnish,
            "glassware": self.glassware
        }

class FavoriteCocktail(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    cocktail_id = db.Column(db.Integer, db.ForeignKey('cocktail.id'), nullable=False)
   
    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "cocktail_id": self.cocktail_id
        }