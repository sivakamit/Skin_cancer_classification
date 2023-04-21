# Skin Cancer Detection

This project aims to build an automated classification system based on image processing techniques to classify skin cancer using skin lesions images. Pre trained deep learning network is utilized. In addition to fine – tuning and augmentation, transfer learning is applied to vision transformers to classify seven different lesions.

## Introduction

Cancer is one of the deadliest diseases in the world and yet it is curable if identified early. Out of that, Melanoma, the least common type of skin cancer, accounts for 75 percent of deaths. It spreads very quickly to other parts if not diagnosed early. Its preliminary treatment includes visual examination of skin’s affected areas (lesions). These lesions are very hard to classify using naked eye.

The motivation is to develop a solution that can help dermatologists better support their diagnostic accuracy by ensembling contextual images and patient-level information, reducing the variance of predictions from the model.

To develop a deep learning model to predict different forms of skin cancer by processing lesion images. Images are given as an input to the vision transform models which compares and classifies into 7 classes. This will enable us to treat similar forms of cancer earlier and effective as possible.

## Dataset

Training of neural networks for automated diagnosis of pigmented skin lesions is hampered by the small size and lack of diversity of available dataset of dermatoscopic images. This problem is tackled by releasing the [HAM10000](https://www.kaggle.com/datasets/kmader/skin-cancer-mnist-ham10000) ("Human Against Machine with 10000 training images") dataset. Dermatoscopic images are collected from different populations, acquired, and stored by different modalities. The final dataset consists of 10015 dermatoscopic images which can serve as a training set for academic machine learning purposes.
Additionally [Skin Lesion Analysis Toward Melanoma Detection 2018: A Challenge Hosted by the International Skin Imaging Collaboration (ISIC)](https://challenge.isic-archive.com/data/#2018) dataset is used for training, testing and validation.

## Data Preprocessing

Training data, validation data, testing data is split into 60 percent, 20 percent, and 20 percent respectively (Train: (9077,12), Valid: (938,12)). Stratified sampling is utilized to split dataset. One hot encoded the location columns to convert the object column to integer. Imputed null values with mean on age column. Removed duplicates which reduced the number of instances
Data is augmentation where the Images are rotated up to 180 degrees, width and height is altered, images are zoomed. Images are also flipped horizontally and vertically for the better performance.Each class is expected to have 6000 images after augmentation. No of training examples before augmentation are 9077. No of training examples after augmentation are 38569.

<img width="500" alt="image" src="https://user-images.githubusercontent.com/38185827/228955035-aa5477a0-bb05-4122-ba88-44a82d21b27d.png">


## Methodology

The Vision Transformer, or ViT, is a model for image classification that employs a Transformer-like architecture over patches of the image. An image is split into fixed-size patches, each of them are then linearly embedded, position embeddings are added, and the resulting sequence of vectors is fed to a standard Transformer encoder. In order to perform classification, the standard approach of adding an extra learnable “classification token” to the sequence is used.
Two variations of vision transformer models ViT-b16 and ViT_b32 are used. It consists of a multi head attention layer, fixed embedding layers, no decoders. These models are trained on large datasets and fine- tuned to work well for small datasets. ViT Transformer is by design permutation invariant. It cannot process grid-structured data.

## Results and discussions

The deep learning neural network model is trained with all the train images generated in the preprocessing stage and validated using the test images with the labels. Figure 9 is the summary of the first model that is used to train the machine learning model intended. First model is ViT_b32 and the second model is ViT_b16.
Both the models are then trained and validated. We used early stopping to monitor validation loss and set the patience parameter equal to 2. We used callback function to save model at regular checkpoints. We used variable learning rate (starting from 0.001) with the help of LearningRateScheduler function. Both the models are run for 10 epochs with batch size 10

<img width="400" alt="image" src="https://user-images.githubusercontent.com/38185827/228955220-d5fac8c7-ed81-44b1-910e-7ded40990e6c.png">   <img width="350" alt="image" src="https://user-images.githubusercontent.com/38185827/228955240-709264fe-b6b0-4247-a153-5098205f4b26.png">


Both the models are then trained and validated. We used early stopping to monitor validation loss and set the patience parameter equal to 2. We used callback function to save model at regular checkpoints. We used variable learning rate (starting from 0.001) with the help of LearningRateScheduler function. Both the models are run for 10 epochs with batch size 10
Model is tested on the testing dataset and the classification is carried out. The probability of each category is return as the predictions for the test images. Based on the probability, accuracy of the first model is 81.06 percentage. And the accuracy of the second model is 83.05 percentage.
Using the trained model single image is tested and predicted. The function return backs the category with the max probability and the distribution among the categories with the help of graph to visualize. Single sample is test here. The model predicts it as “Vascular lesion”

<img width="500" alt="image" src="https://user-images.githubusercontent.com/38185827/228954388-e1c5d223-80cb-479d-a862-993baddb84c6.png">
