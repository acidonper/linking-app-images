#!/bin/bash
####
# Red Hat
# @author: Asier Cidon
# @date: 20200330
####
#
# Process template to deploy a NodeJS App (Linking-app-images)
#

usage() {
echo "Usage: $0 <project_name> <git_user> <git_password> <images_user> <images_password> <openshift_domain>"
echo "Example:"
echo "  ./linking-app-images-template-deploy.sh linking-app linkingappspain pass123 adminimages pass123 example.com"
exit 1
}

[[ $# -eq 0 ]] && usage


PROJECT_NAME=$1
DOMAIN=$6
SERVICE_NAME="linking-app-images"
SERVICE_GIT_URL="https://github.com/acidonper/linking-app-images.git"
SERVICE_GIT_USER=$2
SERVICE_GIT_PASSWORD=$3
IMAGE_USER=$4
IMAGE_PASSWORD=$5
LINKING_APP_IMAGES_SERVICE="https://linking-app-images-${PROJECT_NAME}.${DOMAIN}"

# Create a deployment config object charged with the container creation and inject environment variables 
oc process -f linking-app-images-template.yaml  \
-p NAMESPACE=$PROJECT_NAME \
-p SERVICE_NAME=$SERVICE_NAME  \
-p SERVICE_GIT_URL=$SERVICE_GIT_URL \
-p SERVICE_GIT_USER=$SERVICE_GIT_USER  \
-p SERVICE_GIT_PASSWORD=$SERVICE_GIT_PASSWORD \
-p IMAGE_USER=$IMAGE_USER  \
-p IMAGE_PASSWORD=$IMAGE_PASSWORD \
-p LINKING_APP_IMAGES_SERVICE=$LINKING_APP_IMAGES_SERVICE | oc create -f - -n $PROJECT_NAME

# Start build image
oc start-build bc/$SERVICE_NAME

# Wait for previous process
sleep 900

# Start deployment process
oc rollout latest $SERVICE_NAME -n $PROJECT_NAME