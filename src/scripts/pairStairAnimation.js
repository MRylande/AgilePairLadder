/*
    Copyright 2011 Michael Rylander

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

function init_hover_animation() {
    $(".count_td").hover(
        function () {
            var people = this.id.split("-");
            $(people).each(function(index, person) {
                $("#"+person).children(".left_name").css("text-shadow", "0.25em 0.25em 0.2em #545454");
                $("#"+person).children(".left_name").css("color", "darkRed");
            });
        },

        function () {
            var people = this.id.split("-");
            $(people).each(function(index, person) {
                $("#"+person).children(".left_name").css("text-shadow", "0.1em 0.1em 0.2em #545454");
                $("#"+person).children(".left_name").css("color", "white");
            });
        }
    );
}