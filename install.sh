# server dependencies
echo "--install server dependencies"

cd server
npm i

cd ..

# client dependencies
echo ""
echo "--install client dependencies"

cd client
npm i

cd ...
