1. eas build:configure

2. keytool \
  -genkey -v \
  -storetype JKS \
  -keyalg RSA \
  -keysize 2048 \
  -validity 10000 \
  -storepass "vietsaclo1999" \
  -keypass "vietsaclo1999" \
  -alias "chat_gpt" \
  -keystore dev.keystore \
  -dname "CN=com.expo.vietsaclo.android.package.chatgpt,OU=,O=,L=,S=,C=US"

3. eas build --platform android (build aab)

4. eas build --platform android --local --outpu
t=android/build.apk (build local: error)

5. eas build -p android --profile preview (build apk)
