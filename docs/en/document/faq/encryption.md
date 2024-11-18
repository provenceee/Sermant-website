# Middleware Authorization and Authentication FAQs

This document primarily addresses issues related to authorization and authentication when using middleware.

## How to Obtain the Encrypted Key and Password Ciphertext for Authorization and Authentication

Sermant supports using keys and encrypted passwords for authorization and authentication in dynamic configuration scenarios. Below are the methods to obtain the encrypted key and password ciphertext:

### Supported Versions and Limitations

To obtain the encrypted key and ciphertext, you need a runtime environment with JDK 1.8 or above:

- [HuaweiJDK 1.8](https://gitee.com/openeuler/bishengjdk-8) / [OpenJDK 1.8](https://github.com/openjdk/jdk) / [OracleJDK 1.8](https://www.oracle.com/java/technologies/downloads/)

### Procedure

#### 1. Preparation

- [Download the script](https://github.com/sermant-io/Sermant/blob/develop/scripts/AesUtil.class)

#### 2. Generate the Key and Encrypted Password Ciphertext

Execute the script with the following command, and input your password when prompted:

```shell
java AesUtil
please input your password
123456
encryption key is T4bUktLn5P01Qs6unSuG5ZZElN05WUDAXOjaJgMB5eM=
encrypted password is u/K+lx/m9w1EpEjkM9R48s8PiVDHEpCUGz+1jWOasyzRrQ==
```

After entering your password, the script will output the encryption key `T4bUktLn5P01Qs6unSuG5ZZElN05WUDAXOjaJgMB5eM=` and the encrypted password `u/K+lx/m9w1EpEjkM9R48s8PiVDHEpCUGz+1jWOasyzRrQ==`.