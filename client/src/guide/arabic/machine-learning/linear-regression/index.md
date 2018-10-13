---
title: Linear Regression
localeTitle: الانحدارالخطي
---
## الانحدارالخطي

يساعدنا الانحدار الخطي في توقع درجة متغير X من الدرجات على المتغيرات الأخرى Y. عندما يتم رسم المتغيرات Y ، فإن الانحدار الخطي يجد الخط المستقيم الأفضل من خلال النقاط. يُسمى خط التركيب الأفضل خط الانحدار.

[الانترنت الانحدار الخطي محاكاة](https://www.mladdict.com/linear-regression-simulator)

في بايثون:

 `#Price of wheat/kg and the average price of bread 
 wheat_and_bread = [[0.5,5],[0.6,5.5],[0.8,6],[1.1,6.8],[1.4,7]] 
 
 def step_gradient(b_current, m_current, points, learningRate): 
    b_gradient = 0 
    m_gradient = 0 
    N = float(len(points)) 
    for i in range(0, len(points)): 
        x = points[i][0] 
        y = points[i][1] 
        b_gradient += -(2/N) * (y - ((m_current * x) + b_current)) 
        m_gradient += -(2/N) * x * (y - ((m_current * x) + b_current)) 
    new_b = b_current - (learningRate * b_gradient) 
    new_m = m_current - (learningRate * m_gradient) 
    return [new_b, new_m] 
 
 def gradient_descent_runner(points, starting_b, starting_m, learning_rate, num_iterations): 
    b = starting_b 
    m = starting_m 
    for i in range(num_iterations): 
        b, m = step_gradient(b, m, points, learning_rate) 
    return [b, m] 
 
 gradient_descent_runner(wheat_and_bread, 1, 1, 0.01, 100) 
` 

المثال رمز من [هذه المقالة](http://blog.floydhub.com/coding-the-history-of-deep-learning/) . كما يشرح نزول التدرج والمفاهيم الأساسية الأخرى للتعلم العميق.

من المهم أن نلاحظ أن ليس كل الانحدار الخطي يتم مع نزول التدرج. يمكن أيضًا استخدام المعادلة العادية للعثور على معاملات الانحدار الخطي ، ومع ذلك ، فإن هذا يستخدم مضاعفة المصفوفة ، وبالتالي يمكن أن يستغرق وقتًا طويلاً للاستخدام لأكثر من 100000 أو 1000000 حالة.

في بايثون: تطبيق مباشرة باستخدام مكتبة scikit ، مما يجعل من السهل استخدام الانحدار الخطي حتى على مجموعات البيانات الكبيرة.

 `import pandas as pd 
 from sklearn.cross_validation import train_test_split 
 from sklearn.linear_model import LinearRegression as lr 
 train = pd.read_csv('../input/train.csv') 
 test = pd.read_csv('../input/test.csv') 
 X = train.iloc[:, 0:4].values 
 y = train.iloc[:, 4].values 
 X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 0) 
 X_train 
 model = lr() 
 model.fit(X_train, y_train) 
 print(model.score(X_train,y_train)) 
 y_pred_class = model.predict(X_test) 
 model.score(X_train,y_train) 
 print(model.coef_) 
 print(model.intercept_) 
 # calculate accuracy 
 from sklearn import metrics 
 print(metrics.accuracy_score(y_test, y_pred_class)) 
`