Welcome to the DecReview wiki!
# General Idea
 Decentralized platform for reviewing everything you want, build on a tron network. By using Tron,
in future, we can aviod
paying for transactions by creating a massive frozen fund (or even a cluster of funds)
 Common workflow:
 User wants to write a review about some place of interest, for example Neuschwanstein castle in
Germany. He presed on web page
"Create review button", search for this thing, if nobody have created this product yet- do that by
entering a name of a product,
ategory and attaching pretty link to a picture from web (or upload to our firebase). Then writing a
review and
 The contract is holding all Products and reviews for them. All adjestments can be done by
manager, including adding new managers
and deleting the current ones.

 # Base princips
 * Невмешательсво админов

 * главенствует блокчейн, а мы только показуем информацию, сортируя данные и
выставляя повышенные рейтинги

## Managers
* Могут модерировать, в том числе удалять первоначального менеджера (Если доступом
завлядеют)
* Устанавливают рейтинговые веса

* Устанавливают минимальный вывод.
* Присваивают разовый рейтинг, путем голосования за ревью. Просто большое число,
которое сильно бафнет рейтинг ревью


## Second-tier admins
* Их голоса не настолько сильны, как у модераторов, для того, чтобы через эти аккаунты
выставлять весы для отдельных комментирующих адресов.
* Возможно они будут оперировать через базу данных всех наших пользователей, где мы
по сути будем иметь активность

## Withdrawals
 * Выводить можно раз в месяц без разрешения менеджера, раньше-от какой-то суммы,
при этом должна быть соблюдена количественность.

```javascript
Logic => {
 blockPeriod = creationDate + minTimeWithdraw
 if ( (lastOut > blockPeriod && reviews.length > 10) {
 /Вывод топовым отзывам(45+22+8+5+3+2+2+2+1 / 10% на развитие платформы)/
 }
}
```
 * Никто не может выводить деньги заранее, а никакой рейтинг не может идти против
обезумевшей толпы (на самом деле это ситуация,
когда попался недобросовестный менеджер, пытающийся накрутить себе рейтинг)
 * Чтобы не было "атаки 51%", когда просто собираются капиталы и забирают все деньги,
имей баланс между активностью на сайте, балансом пользователя, реальностью отзывов и
системы кластеров модераторов, чтобы уничтожать рейтинг явно спамерских отзывов.
* С другой стороны если этим займутся прямо отзывные компании, то мне же лучше-выше
качество обзоров, но в конечном итоге
миссия будет выполнена: от этого люди и компании будут иметь профит.

 ## Rating
 * Рейтинг может давать супер повышенные проценты: лучшие авторы будут работать
вообще без комисии

 * Рейтингование осуществляется посредством машины модерации: ML, которая буедт
проходить по всем аккаунтам и с правами

админа менять рейтинги. Сначала простую-потом продвигать ее все дальше и дальше.
Когда-то ее стравить на только что созданные отзывы

 ## Database
 * Вся база является только индексной-может быть пересчитана в любой момент времени.
При этом на всякий случай держи бэкапы уже

индексированных, чтобы быстро восстанавливать стабильную работу сайта.
 * Создай индексирующую всю инфу с сайта БД, через которую будет легче искать и
отображать контракты и настраивать рейтинг

 ## Common
 * Оставил отзыв-оцени еще один, но только если больше 5 всего (2, если 10). Красиво
аргументируй-получить должны только реальные люди.
А каждый левый голос может уменьшить скрытый рейтинг, и потом уведет в
отрицательный баланс. Посмотреть какие хорошиедело 30 секунд, а вам сэкономит кучу времени и поднимет рейтинг.
 * Разделять людей по регионам

 * Фото для обзоров только свои

 * Неплохо бы иметь support email, чтобы туда присылали инфу о явно спамерских отзывах

 * Людям можно давать аккаунты на прокат, но это заберет хорошую комиссию
(своеобразное поощрение за самостоятельность)
 * Говори при создании что можно в конце оставить по желанию свой email, чтобы с вами
могли связаться

 * Отдел FAQ. Тут мотивируй людей:
 1)Чем быстрее напишите отзыв-больше людей посмотрят, больше шанс получить
высокую оценку

 * Когда человек хочет откомментировать с нашим адресом-регистрация только по гуглу и
китайской херне (над вторым подумай)


 ## OTHER
 -На сайте висеть кошелек для доната на развитие платформы