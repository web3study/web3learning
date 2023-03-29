---
title: 同态加密
sidebar_label: 同态加密
sidebar_position: 40
image: /img/bac111.png
description: 同态加密
---

### 同态加密

同态加密（Homomorphic Encryption）是一种加密技术，它允许对加密数据进行运算操作，而不需要解密数据。简单来说，同态加密可以让我们在不知道明文的情况下，对密文进行计算，得到的结果仍然是加密形式的结果。

同态加密可以分为完全同态加密（Fully Homomorphic Encryption，FHE）和部分同态加密（Partially Homomorphic Encryption，PHE）两种。FHE能够进行任意计算操作，但计算速度较慢，而PHE只能进行一种或少数几种计算操作，但计算速度较快。

同态加密在隐私保护、云计算、数据分析等领域中具有广泛应用。下面是一些常见的同态加密算法：

RSA同态加密：基于RSA加密算法的同态加密算法，可以实现加法和乘法运算。

ElGamal同态加密：基于离散对数算法的同态加密算法，可以实现加法和乘法运算。

Gentry的FHE：是第一个完全同态加密算法，但计算速度较慢。

Brakerski-Gentry-Vaikuntanathan（BGV）同态加密：是一种广泛使用的完全同态加密算法，计算速度相对较快。

Cheon-Kim-Kim-Song同态加密：是一种基于椭圆曲线离散对数的同态加密算法，具有较高的安全性和计算速度。

需要注意的是，同态加密算法的计算速度较慢，实现过程也较为复杂，因此在具体应用时需要综合考虑安全性、计算效率和可用性等因素。

目前有一些开源的同态加密框架可供使用，以下是其中一些常用的开源框架：

SEAL：是微软开发的一个开源同态加密框架，支持部分同态加密和完全同态加密，可用于C++、Python和.NET等多种编程语言。

PALISADE：是一个开源的同态加密库，支持完全同态加密和部分同态加密，具有高度的灵活性和可扩展性，支持多种算法和加密方案，可以用于C++和Java等编程语言。

HElib：是一个开源的完全同态加密框架，由IBM研究人员开发，可用于C++编程，支持基于Gentry的同态加密算法。

TFHE：是一个开源的全同态加密库，支持部分同态加密和完全同态加密，可用于C++编程，支持多种算法和加密方案，具有高度的灵活性和可扩展性。

这些开源框架都在同态加密领域得到了广泛的应用和不断的更新和改进。具体选择哪一个框架，需要根据具体应用场景和自身需求来进行选择。需要注意的是，同态加密算法和框架的计算开销较大，需要在实际应用中进行充分的评估和测试，以确保其可用性和性能。


以下是一个使用PALISADE同态加密库进行加法同态计算的Java示例代码：

```java
import java.math.BigInteger;
import java.util.Random;
import org.apache.commons.math3.stat.descriptive.summary.Sum;
import org.apache.commons.math3.linear.RealVector;
import org.apache.commons.math3.linear.ArrayRealVector;
import org.apache.commons.math3.distribution.NormalDistribution;
import org.apache.commons.math3.analysis.function.Sigmoid;

import lbcrypto.CryptoParametersGen;
import lbcrypto.CryptoParameters;
import lbcrypto.Polynomial;
import lbcrypto.PackedEncoding;
import lbcrypto.EncryptedArray;
import lbcrypto.EncryptedArrayImpl;
import lbcrypto.Ciphertext;
import lbcrypto.CiphertextImpl;

public class HomomorphicAddition {

    public static void main(String[] args) {

        // Generate crypto parameters
        CryptoParametersGen paramsGen = new CryptoParametersGen();
        CryptoParameters params = paramsGen.generateParams(1024, 128);

        // Create encrypted array object
        EncryptedArray ea = new EncryptedArrayImpl(params);

        // Generate two random plaintexts
        int N = params.getPolyParams().getN();
        int[] a = new int[N];
        int[] b = new int[N];
        Random rnd = new Random();
        for (int i = 0; i < N; i++) {
            a[i] = rnd.nextInt(2);
            b[i] = rnd.nextInt(2);
        }

        // Encode plaintexts as polynomials
        Polynomial pA = new Polynomial(N, a);
        Polynomial pB = new Polynomial(N, b);

        // Encrypt plaintexts
        Ciphertext cA = new CiphertextImpl(params);
        Ciphertext cB = new CiphertextImpl(params);
        ea.encrypt(cA, params.getPublicKey(), pA);
        ea.encrypt(cB, params.getPublicKey(), pB);

        // Add encrypted values
        Ciphertext cResult = ea.add(cA, cB);

        // Decrypt result
        Polynomial pResult = new Polynomial(N);
        ea.decrypt(cResult, params.getSecretKey(), pResult);

        // Print result
        System.out.print("A: ");
        for (int i = 0; i < N; i++) {
            System.out.print(a[i] + " ");
        }
        System.out.println();
        System.out.print("B: ");
        for (int i = 0; i < N; i++) {
            System.out.print(b[i] + " ");
        }
        System.out.println();
        System.out.print("A+B: ");
        for (int i = 0; i < N; i++) {
            System.out.print(pResult.getCoef(i) + " ");
        }
        System.out.println();
    }
}

```

该示例中，我们使用PALISADE库生成加密参数，生成两个随机的二进制明文，将其编码为多项式形式，使用公钥加密明文，对加密后的密文进行同态加法操作，最终使用私钥解密得到加密后的结果。需要注意的是，该示例仅实现了加法同态计算，其他同态计算可以参考PALISADE官方文档进行实现。



