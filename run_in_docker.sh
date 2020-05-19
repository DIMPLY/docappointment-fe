echo "Removing the old image..."
docker image rm docapp_fe:latest
echo "Building the image from Dockerfile..."
docker build -t docapp_fe:latest .
echo "==========="
echo "Image built. Starting the ng dev service..."
docker run --rm -ti -p 4200:4200 docapp_fe
