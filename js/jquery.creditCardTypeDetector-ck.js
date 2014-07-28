/*!
 * jQuery Credit Card Type Detector plugin
 * version 0.9
 * by Christian Reed - http://christianreed.org
 * with support from Nick James - http://nickjames.info
 * for Athletepath - http://athletepath.com
 * https://github.com/christianreed/Credit-Card-Type-Detector
 * Copyright (c) 2012 Christian Reed
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * Basic Use:
 * $('#credit_card_input_field').creditCardTypeDetector({ 'credit_card_logos_id' : '#card_logos_ele' });
 *
 * Default requires no arguments, but looks for the logos to have the class
 * .card_logos
 *
 * See accompanying files for HTML structure, CSS, and png of card logos.
 */(function(e){e.fn.creditCardTypeDetector=function(t){var n=e.extend({credit_card_logos_id:".card_logos"},t),r=e(n.credit_card_logos_id),i=new RegExp("^4[0-9]{0,15}$"),s=new RegExp("^5$|^5[1-5][0-9]{0,14}$"),o=new RegExp("^3$|^3[47][0-9]{0,13}$"),u=new RegExp("^3$|^3[068]$|^3(?:0[0-5]|[68][0-9])[0-9]{0,11}$"),a=new RegExp("^6$|^6[05]$|^601[1]?$|^65[0-9][0-9]?$|^6(?:011|5[0-9]{2})[0-9]{0,12}$"),f=new RegExp("^2[1]?$|^21[3]?$|^1[8]?$|^18[0]?$|^(?:2131|1800)[0-9]{0,11}$|^3[5]?$|^35[0-9]{0,14}$");return this.each(function(){e(this).keyup(function(){var t=e(this).val();t=t.replace(/ /g,"").replace(/-/g,"");if(t.match(i)){e(r).addClass("is_visa");e(".card_logos").fadeIn(200)}else e(r).removeClass("is_visa");if(t.match(s)){e(r).addClass("is_mastercard");e(".card_logos").fadeIn(200)}else e(r).removeClass("is_mastercard");if(t.match(o)){e(r).addClass("is_amex");e(".card_logos").fadeIn(200)}else e(r).removeClass("is_amex");if(t.match(u)){e(r).addClass("is_diners");e(".card_logos").fadeIn(200)}else e(r).removeClass("is_diners");if(t.match(a)){e(r).addClass("is_discover");e(".card_logos").fadeIn(200)}else e(r).removeClass("is_discover");if(t.match(f)){e(r).addClass("is_jcb");e(".card_logos").fadeIn(200)}else e(r).removeClass("is_jcb");t!=""&&!t.match(i)&&!t.match(s)&&!t.match(o)&&!t.match(u)&&!t.match(a)&&!t.match(f)?e(r).addClass("is_nothing"):e(r).removeClass("is_nothing")})})}})(jQuery);