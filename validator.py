#-*- coding: utf8 -*-
#------------------------------------------------------------------------------#
#----                                                                      ----#
#----  Validator testing functions                                         ----#
#----                                                                      ----#
#----  Para dos algoritmos de cálculo de cédula ecuatoriana                ----#
#----                                                                      ----#
#----  Autor: Pato Valarezo (c) patovala@pupilabox.net.ec @patovala        ----#
#------------------------------------------------------------------------------#


def cedula1(cedula):
    """La primera function del google+ discussion python"""
    r = 0
    verificador = 0
    c = 1
    for i in cedula[0:9]:
        if c % 2 != 0:
            r = int(i) * 2
            if r > 9:
                for x in str(r):
                    verificador += int(x)
            else:
                verificador += r
        else:
            verificador += int(i)
        c += 1

    if verificador % 10 == 0 and int(cedula[9]) == 0:
        return (verificador, True)
    elif (10 - (verificador % 10)) == int(cedula[9]):
        return (verificador, True)
    else:
        return (verificador, False)


def cedula2(cedula):
    """mi implementación del algoritmo anterior """
    cint = [int(d) for d in cedula]
    tester = cint[-1]
    cint = cint[:-1]
    impar = map(lambda a: sum(map(int, list(str(a * 2)))), cint[0::2])
    pares = cint[1::2]
    verificador = sum(pares + impar)

    if verificador % 10 == 0 and tester == 0:
        return (verificador, True)

    return (verificador, (10 - (verificador % 10)) == tester)
