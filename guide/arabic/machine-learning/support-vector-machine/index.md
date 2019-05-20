---
title: Support Vector Machine
localeTitle: دعم شاحنات النقل
---
## دعم شاحنات النقل

آلة المتجهات الداعمة (SVM) هي عبارة عن مصنف تمييزي تم تعريفه بشكلٍ رسمي بواسطة جهاز الفصل الفائق. وبعبارة أخرى ، عند إعطاء بيانات التدريب المسمى (التعلم تحت الإشراف) ، تخرج الخوارزمية فرطًا واضحًا مثاليًا يصنف الأمثلة الجديدة. يقوم بذلك عن طريق تقليل الهامش بين نقاط البيانات بالقرب من الطائرة الفائقة.

![SVM مقابل الانحدار اللوجستي](https://cdn-media-1.freecodecamp.org/imgr/KUeOSK3.png)

تسعى دالة تكلفة SVM لتقريب الدالة اللوجيستية مع خطي طولي. يتم استخدام خوارزمية ML لمشكلات التصنيف وهي جزء من مجموعة فرعية من خوارزميات التعلم تحت الإشراف.

### دالة التكلفة

![وظيفة التكلفة SVM](https://cdn-media-1.freecodecamp.org/imgr/SOhv2jZ.png)

يتم استخدام وظيفة التكلفة لتدريب SVM. من خلال تقليل قيمة J (theta) ، يمكننا التأكد من أن SVM دقيق قدر الإمكان. في المعادلة ، تشير تكلفة الدالات 1 والتكلفة 0 إلى تكلفة مثال حيث y = 1 والتكلفة لمثال حيث y = 0. يتم تحديد تكلفة SVMs بواسطة وظائف kernel (التشابه).

### الألباب

من المحتمل أن تكون ميزات متعددة الحدود مكلفة من الناحية الحسابية وقد تؤدي إلى إبطاء وقت التشغيل باستخدام مجموعات بيانات كبيرة. فبدلاً من إضافة المزيد من الميزات متعددة الحدود ، أضف "المعالم" التي تختبر من خلالها القرب من نقاط البيانات الأخرى. كل عضو في مجموعة التدريب هو علامة بارزة. النواة هي "وظيفة التشابه" التي تقيس مدى اقتران الإدخال بعلامة معينة.

### تصنيف الهامش الكبير

سيجد SVM الخط (أو hyperplane في الحالة العامة) التي تقوم بتقسيم البيانات ذات الهامش الأكبر. في حين أن القيم المتطرفة قد تؤثر على الخط في اتجاه واحد ، فإن قيمة C صغيرة بما فيه الكفاية ستفرض التسوية. يعمل هذا التسوية الجديد نفسه مع 1 / \\ lambda ، كما رأينا في الانحدار الخطي واللوجستي ، ولكن هنا نقوم بتعديل مكون التكلفة.

#### معلومات اكثر:

[أندرو نغ ML ML](https://www.coursera.org/learn/machine-learning/) [محاضرة فيديو مستقلة](https://www.youtube.com/watch?v=1NxnPkZM9bc) [SVM على ويكيبيديا](https://en.wikipedia.org/wiki/Support_vector_machine)

فيما يلي التعليمات البرمجية المكتوبة للتدريب والتنبؤ وإيجاد الدقة لـ SVM في python. يتم ذلك باستخدام Numpy ، ومع ذلك ، يمكننا أيضًا الكتابة باستخدام scikit-learn في استدعاء دالة.

 `import numpy as np 
 
 
 class Svm (object): 
    """" Svm classifier """ 
 
    def __init__ (self, inputDim, outputDim): 
        self.W = None 
 
        # - Generate a random svm weight matrix to compute loss                 # 
        #   with standard normal distribution and Standard deviation = 0.01.    # 
 
        sigma =0.01 
        self.W = sigma * np.random.randn(inputDim,outputDim) 
 
 
 
    def calLoss (self, x, y, reg): 
        """ 
        Svm loss function 
        D: Input dimension. 
        C: Number of Classes. 
        N: Number of example. 
        Inputs: 
        - x: A numpy array of shape (batchSize, D). 
        - y: A numpy array of shape (N,) where value < C. 
        - reg: (float) regularization strength. 
        Returns a tuple of: 
        - loss as single float. 
        - gradient with respect to weights self.W (dW) with the same shape of self.W. 
        """ 
        loss = 0.0 
        dW = np.zeros_like(self.W) 
 
        # - Compute the svm loss and store to loss variable.                        # 
        # - Compute gradient and store to dW variable.                              # 
        # - Use L2 regularization                                                  # 
 
        #Calculating score matrix 
        s = x.dot(self.W) 
        #Score with yi 
        s_yi = s[np.arange(x.shape[0]),y] 
        #finding the delta 
        delta = s- s_yi[:,np.newaxis]+1 
        #loss for samples 
        loss_i = np.maximum(0,delta) 
        loss_i[np.arange(x.shape[0]),y]=0 
        loss = np.sum(loss_i)/x.shape[0] 
        #Loss with regularization 
        loss += reg*np.sum(self.W*self.W) 
        #Calculating ds 
        ds = np.zeros_like(delta) 
        ds[delta > 0] = 1 
        ds[np.arange(x.shape[0]),y] = 0 
        ds[np.arange(x.shape[0]),y] = -np.sum(ds, axis=1) 
 
        dW = (1/x.shape[0]) * (xT).dot(ds) 
        dW = dW + (2* reg* self.W) 
 
 
        return loss, dW 
 
    def train (self, x, y, lr=1e-3, reg=1e-5, iter=100, batchSize=200, verbose=False): 
        """ 
        Train this Svm classifier using stochastic gradient descent. 
        D: Input dimension. 
        C: Number of Classes. 
        N: Number of example. 
        Inputs: 
        - x: training data of shape (N, D) 
        - y: output data of shape (N, ) where value < C 
        - lr: (float) learning rate for optimization. 
        - reg: (float) regularization strength. 
        - iter: (integer) total number of iterations. 
        - batchSize: (integer) number of example in each batch running. 
        - verbose: (boolean) Print log of loss and training accuracy. 
        Outputs: 
        A list containing the value of the loss at each training iteration. 
        """ 
 
        # Run stochastic gradient descent to optimize W. 
        lossHistory = [] 
        for i in range(iter): 
            xBatch = None 
            yBatch = None 
 
            # - Sample batchSize from training data and save to xBatch and yBatch   # 
            # - After sampling xBatch should have shape (batchSize, D)              # 
            #                  yBatch (batchSize, )                                 # 
            # - Use that sample for gradient decent optimization.                   # 
            # - Update the weights using the gradient and the learning rate.        # 
 
            #creating batch 
            num_train = np.random.choice(x.shape[0], batchSize) 
            xBatch = x[num_train] 
            yBatch = y[num_train] 
            loss, dW = self.calLoss(xBatch,yBatch,reg) 
            self.W= self.W - lr * dW 
            lossHistory.append(loss) 
 
            # Print loss for every 100 iterations 
            if verbose and i % 100 == 0 and len(lossHistory) is not 0: 
                print ('Loop {0} loss {1}'.format(i, lossHistory[i])) 
 
        return lossHistory 
 
    def predict (self, x,): 
        """ 
        Predict the y output. 
        Inputs: 
        - x: training data of shape (N, D) 
        Returns: 
        - yPred: output data of shape (N, ) where value < C 
        """ 
        yPred = np.zeros(x.shape[0]) 
 
        # -  Store the predict output in yPred                                    # 
 
        s = x.dot(self.W) 
        yPred = np.argmax(s, axis=1) 
        return yPred 
 
 
    def calAccuracy (self, x, y): 
        acc = 0 
 
        # -  Calculate accuracy of the predict value and store to acc variable 
        yPred = self.predict(x) 
        acc = np.mean(y == yPred)*100 
        return acc 
` 

#### معلومات اكثر:

[Scikit-learn SVM](http://scikit-learn.org/stable/modules/svm.html)