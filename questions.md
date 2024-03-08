QUESTIONS
Merci de répondre librement et le plus clairement possible aux questions suivantes:

PUT & PATCH
Quelle est la différence entre un PUT un PATCH

 - Le PATCH va servir à mettre à jour partiellement les données, contrairement au PUT qui va mettre à jour l'intégralité de la ressource.

FETCH/AXIOS
Pourquoi un call vers mon api depuis Postman fonctionne mais semble bloqué lorsque le même call est exécuté par Firefox?

 - À cause du CORS (Cross-Origin Resource Sharing) l'API peut très bien marcher depuis postman mais ne plus fonctionner avec Firefox s'ils sont sur des domaines différents.

NGINX/APACHE
Qu'est ce qui justifie d'avoir en plus de notre api node un serveur web comme Apache ou Nginx?
 - Un serveur Apache ou Nginx peut être justifié par une meilleure gestion de la charge et de la performance de l'API.

PERFORMANCES
Citez 3 axes vus en cours pour améliorer les performance d'une api Rest 
    - La mise en cache avec par exemple redis
    - L'indexation
    - Mettre en place un revers proxy avec par exemple Nginx pour une meilleure gestion de la charge