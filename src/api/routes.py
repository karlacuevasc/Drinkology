"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Cocktail, FavoriteCocktail
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

api = Blueprint('api', __name__)


@api.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    all_users = list(map(lambda user: user.serialize(), users))
    
    return jsonify(all_users), 200

@api.route('/user/<int:id>', methods=['GET'])
def get_single_user(id):
    single_user = User.query.get(id)
    

    return jsonify(single_user.serialize()), 200

@api.route('/user/active', methods=['POST'])
def get_active_user():
    body = request.get_json()
    print("//////////////////////////////", body)
    single_user = User.query.filter_by(email = body["email"]).first()
    print(single_user)

    return jsonify(single_user.serialize()), 200

@api.route('/cocktails', methods=['GET'])
def get_cocktails():
    cocktails = Cocktail.query.all()
    all_cocktails = list(map(lambda cocktail: cocktail.serialize(), cocktails))

    return jsonify(all_cocktails), 200

@api.route('/cocktail/<int:id>', methods=['GET'])
def get_single_cocktail(id):
    single_cocktail = Cocktail.query.get(id)
    print("single cocktail")

    return jsonify(single_cocktail.serialize()), 200

@api.route('/cocktail', methods=["POST"])
def create_cocktail():
    body = request.get_json()
    print("/////////////////////", body)
    name = body["name"]
    image = body["image"]
    alcohol_content = body["alcohol_content"]
    glassware = body["glassware"]
    garnish = body["garnish"]
    first_step = body["first_step"]
    second_step = body["second_step"]
    third_step = body["third_step"]
    fourth_step = body["fourth_step"]
    fifth_step = body["fifth_step"]
    first_ingredient = body["first_ingredient"]
    second_ingredient = body["second_ingredient"]
    third_ingredient = body["third_ingredient"]
    fourth_ingredient = body["fourth_ingredient"]
    fifth_ingredient = body["fifth_ingredient"]
    first_measurement = body["first_measurement"]
    second_measurement = body["second_measurement"]
    third_measurement = body["third_measurement"]
    fourth_measurement = body["fourth_measurement"]
    fifth_measurement = body["fifth_measurement"]
    cocktail_exists = Cocktail.query.filter_by(name=name).first()
    print("/////////////////////", cocktail_exists)
    if cocktail_exists is not None:
        raise APIException("Cocktail already exists", 400)

    cocktail = Cocktail(name=name,image=image,alcohol_content=alcohol_content,
    glassware =glassware,
    garnish =garnish,
    first_step =first_step,
    second_step =second_step,
    third_step =third_step,
    fourth_step =fourth_step,
    fifth_step =fifth_step,
    first_ingredient =first_ingredient,
    second_ingredient =second_ingredient,
    third_ingredient =third_ingredient,
    fourth_ingredient =fourth_ingredient,
    fifth_ingredient =fifth_ingredient,
    first_measurement =first_measurement,
    second_measurement =second_measurement,
    third_measurement =third_measurement,
    fourth_measurement =fourth_measurement,
    fifth_measurement =fifth_measurement
  ) 
    
    db.session.add(cocktail)
    db.session.commit()

    
    return jsonify(cocktail.serialize()), 201

@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email).first()
    if user is None:
        return jsonify({"Message": "Please contact your administrator"}), 401

    if password != user.password:
        return jsonify({"Message": "Please check your credentials"}), 401
        
    access_token = create_access_token(identity=email)
    print(user.first_name)
    return jsonify(access_token=access_token)

@api.route("/user", methods=["POST"])
def create_user():
    body = request.get_json()
    print("/////////////////////", body)
    email = body["email"]
    password = body["password"]
    first_name = body["first_name"]
    last_name = body["last_name"]
    date = body["date"]
    user_exists = User.query.filter_by(email=email).first()
    print("/////////////////////", user_exists)
    if user_exists is not None:
        raise APIException("user already exists", 400)

    user = User(first_name=first_name, 
    last_name=last_name, 
    email=email, 
    password=password, 
    date=date) 
    
    db.session.add(user)
    db.session.commit()

    
    return jsonify(user.serialize()), 201


@api.route('/favorites', methods=["POST"])
def favorite_cocktail():
    body = request.get_json()

    if body is None:
        raise APIException("You need to specify the request body as a json object", status_code=400)

    # new_favorite = FavoriteCocktail.query.filter_by(user_id=body['user_id'], cocktail_id=body['cocktail_id']).first()

    # if new_favorite is not None:
    #     return "", 404

    favorite = FavoriteCocktail(user_id=body['user_id'], cocktail_id=body['cocktail_id'])

    db.session.add(favorite)
    db.session.commit()

    # new_favorite = FavoriteCocktail.query.filter_by(user_id=body['user_id'])
    # new_favorite = list(map(lambda favorite: favorite.serialize(), new_favorite))

    return jsonify(new_favorite), 200

@api.route('/user/<id>', methods=['DELETE'])
def remove_user(id):
    delete_user = User.query.get(id)
    if delete_user is None:
        raise APIException('Cocktail not found', status_code=404)
    db.session.delete(delete_user)
    db.session.commit()
    return jsonify({"Message": "Item Removed"})

@api.route('/cocktail/<id>', methods=['DELETE'])
def remove_cocktail(id):
    delete_cocktail = Cocktail.query.get(id)
    if delete_cocktail is None:
        raise APIException('Cocktail not found', status_code=404)
    db.session.delete(delete_cocktail)
    db.session.commit()
    return jsonify({"Message": "Item Removed"})

